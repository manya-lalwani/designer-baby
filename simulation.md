---
layout: default
title: Population-Level Impacts
---

[Intro Text]

### Learn about IVF, Gene Editing, and Population Genetics by trying out our simulation!: **https://colab.research.google.com/drive/1SO0jvVLpoY9g3-dU-fgFxAhxk2q8u0_3?usp=sharing**

Instructions:
1. Run first cell (Inputs)
2. In the output of the first cell, input the number of generations you want to simulate.
3. Input the number of people in each generation (the more people you add, the slower the simulation will run - we suggest sticking in between 0-1500 people, but more is possible - just be patient!)
4. Select the mating type of the population. Random means that random pairs mate and produce offspring. Assortative means that people who are more phenotypically similar to each other will produce offspring together (for example, two people with red hair might be more likely to mate than one person with brown hair and one person with red hair). IVF mating simulates overall random mating, but some pairs choose to screen their fertilized cells and implant the one that's the most fit, based on their genotype for different traits. Gene-editing mating simulates overall random mating, but some pairs choose to edit the genotypes of their fertilized cells to make them the most fit that they can be. 
5. Select the way to calculate fitness. Linear-positive fitness means that having a higher value for phenotypes (think taller height, larger weight, 1 for binary 0/1 traits) makes you more likely to have offspring. Other options are random fitness, which implements a random fitness per individual drawn from a normal distribution, and no fitness (every individual is equally likely to have offspring).
6. If you selected IVF or gene-editing mating, you'll have extra options to select how many pairs in each generation are having IVF offspring or gene-editing their offspring. 
7. Select the number of monogenic recessive traits - these are binary 0/1 traits where one locus (spot) in the genome determines what trait you'll have. There's no environmental impact on these traits. 
8. Select the number of uncorrelated polygenic traits. These are traits where multiple loci in the genome, as well as your environment, determine what trait you'll have. These are continuous traits, not binary traits. 
9. Select the number of correlated polygenic trait pairs. These are similar to the last category, but these traits are correlated with each other. For example, if some of the loci for eye color and hair color are the same, then the value of the eye color phenotype is connected to the value of the hair color phenotype. This is called pleiotropy. 
10. Click "Submit Initial Info".
11. For each uncorrelated polygenic trait you added, a row will pop up where you can determine the number of loci that actually affect the trait (causal SNPs), the number of loci that don't affect the trait (extra noise, noncausal SNPs), and the heritability of the trait (h^2). Heritability means how much of the phenotypic variation in a population is due to the genotypic variation. A trait with higher heritability means it is mostly determined by your genotype that you get from your parents, while lower heritability means the trait is mostly determined by your environment.
12. For each correlated polygenic trait you add, a row will pop up where you can determine the number of causal SNPs, number of noncausal SNPs, heritability of each trait, and the genetic and environmental correlation of the two traits. Traits with a higher genetic correlation share more of the same causal loci in the genome. Traits with a higher environmental correlation have similar environmental contributions to their phenotype.
13. Once you fill in these rows, click "Update Trait Info", and then click "Save all Inputs".
14. Run all of the Setup cells and all of the Run Simulation cells.
15. Run all of the Results cells.
16. Look at the results! For more information on interpreting results, see the examples below. 

[Examples]

[Outro Text]