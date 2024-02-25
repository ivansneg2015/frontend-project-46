<h1>Difference Finder:</h1>
<p>The utility compares two configuration files(JSON,Yaml or Yml) and shows the differences</p>

### Hexlet tests and linter status:
[![Actions Status](https://github.com/ivansneg2015/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/ivansneg2015/frontend-project-46/actions)

### Code Climate reviews
<a href="https://codeclimate.com/github/ivansneg2015/frontend-project-46/maintainability"><img src="https://api.codeclimate.com/v1/badges/a3af173617d3e651375b/maintainability" /></a>

<p><h2>System requirements</h2>
   <ul>
      <li>node.js v21.1.0</li>
      <li>npm v10.2.3</li>
   </ul>
</p>
<p><h2>Installation</h2>
   <ol>
      <li><h3>Clone the repository locally:</h3>
        https://github.com/ivansneg2015/frontend-project-46
      </li>
      <li><h3>Install all dependencies:</h3>
         npm ci
      </li>
      <li><h3>Install  apps global</h3>
         npm link
      </li>
      <li><h3>Run utility with command:</h3>
        <p>'gendiff -f format filepath1 filepath2'
        <br>or 'gendiff filepath1 filepath2' (the utility uses default format: stylish)</br>
        </p>
      </li>
   </ol>
</p>
<p> <h2> without nested structure</h2>
    <a href="https://asciinema.org/a/633490" target="_blank"><img src="https://asciinema.org/a/633490.svg" /></a>
</p>
<p> <h2> nested structure, format 'stylish' </h2>
<a href="https://asciinema.org/a/633491" target="_blank"><img src="https://asciinema.org/a/633491.svg" /></a>
</p>
<p> <h2> nested structure, format 'plain' <h2>
<a href="https://asciinema.org/a/633493" target="_blank"><img src="https://asciinema.org/a/633493.svg" /></a>
</p>
<p> <h2> nested structure, format 'json' </h2>
<a href="https://asciinema.org/a/633495" target="_blank"><img src="https://asciinema.org/a/633495.svg" /></a>
<p>
