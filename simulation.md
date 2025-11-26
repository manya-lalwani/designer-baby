---
layout: default
title: Population-Level Impacts
---

[Intro Text]

<form id="simForm">

  <h3>Population Settings</h3>

  <label>Number of Generations:</label>
  <input type="number" id="generations" value="3"><br>

  <label>Population Sizes (comma separated):</label>
  <input type="text" id="population_sizes" value="500,500,500"><br><br>

  <h3>Mating Type</h3>
  <select id="mating_type">
    <option value="random">Random</option>
    <option value="assortative">Assortative</option>
    <option value="ivf">IVF</option>
    <option value="gene_editing">Gene Editing</option>
  </select><br><br>

  <h3>Fitness Function</h3>
  <select id="fitness_function">
    <option value="no_fitness">No Fitness</option>
    <option value="linear_positive">Linear Positive</option>
    <option value="random">Random</option>
  </select><br><br>

  <h3>Trait JSON</h3>
  <textarea id="traits_json" rows="12" cols="80">[
  {
    "type": "monogenic_recessive",
    "causal_snps": 1,
    "noncausal_snps": 0,
    "h2": 1
  }
]</textarea><br><br>

  <h3>IVF/Gene Editing Sizes</h3>
  <label>IVF Sizes:</label>
  <input type="text" id="ivf_sizes" value="0,0,0"><br>

  <label>Gene Editing Sizes:</label>
  <input type="text" id="edit_sizes" value="0,0,0"><br><br>

  <button type="button" onclick="submitSimulation()">Run Simulation</button>

</form>

<div id="results"></div>

<script>
async function submitSimulation() {

    const generations = parseInt(document.getElementById("generations").value);
    const population_sizes = document.getElementById("population_sizes").value
        .split(",").map(x => parseInt(x.trim()));

    const traits = JSON.parse(document.getElementById("traits_json").value);

    const mating_type = document.getElementById("mating_type").value;
    const fitness_function = document.getElementById("fitness_function").value;

    const ivf_sizes = document.getElementById("ivf_sizes").value
        .split(",").map(x => parseInt(x.trim()));

    const edit_sizes = document.getElementById("edit_sizes").value
        .split(",").map(x => parseInt(x.trim()));

    // Build JSON input
    const payload = {
        generations,
        population_sizes,
        traits,
        mating_type,
        fitness_function,
        ivf_sizes,
        edit_sizes
    };

    // Send to PythonAnywhere
    const response = await fetch("https://YOUR_USERNAME.pythonanywhere.com/run_simulation", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    const result = await response.json();
    document.getElementById("results").innerHTML = 
        "<pre>" + JSON.stringify(result, null, 2) + "</pre>";
}
</script>


[Examples]

[Outro Text]