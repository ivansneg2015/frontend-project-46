#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';
import { resolve } from 'path';
import { promises as fs } from 'fs';
import genDiff from '../src/index.js';

const program = new Command();
program
  .version('0.0.1', '-V, --version','output the version number')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action(async (filepath1, filepath2) => {
    try {
      const file1 = await fs.readFile(resolve(process.cwd(), filepath1), 'utf-8');
      const file2 = await fs.readFile(resolve(process.cwd(), filepath2), 'utf-8');
      console.log(genDiff(file1, file2));
    } catch (error) {
      console.error('Error reading files:', error);
    }
  });

program.parse();
