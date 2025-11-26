async function runSimulation() {
    const payload = {
        num_generations: Number(document.getElementById("gens").value),
        population_size: Number(document.getElementById("pop").value),
        num_traits: Number(document.getElementById("traits").value),
    };

    const response = await fetch("https://mlalwani.pythonanywhere.com/run", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
    });

    const results = await response.json();
    document.getElementById("output").textContent = JSON.stringify(results, null, 2);
}
