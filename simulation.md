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

### Simplified Explanation of Mathematical Model

Our population genetics model follows the statistical modeling theory of modern population genetics, slightly simplified to be useful for our main purposes: to learn about how IVF and gene-editing may impact our population. The model described below is a slight simplification of the code we wrote (sometimes overlooking normalization and other standard practices), but is otherwise representative of how our simulation works.

To define the first generation, we simulate genotypic values, environmental values, and phenotypic values separately for each trait and each SNP (single nucleotide polymorphism). The phenotypic value is equal to the genotypic value + the environmental value. A genotypic value is represented as 0=aa, 1=Aa,2=AA. For a monogenic recessive trait, 

$$
G \sim \mathrm{Binomial}(n=2,\, p=0.5)
$$

$$
E = 0
$$

$$
P =
\begin{cases}
1, & \text{if } G = 0,\\[6pt]
0, & \text{otherwise.}
\end{cases}
$$

For an uncorrelated polygenic trait,

$$
\begin{aligned}
p &\sim \mathrm{Uniform}(0,1) \\
G &\sim \mathrm{Binomial}(2,\, p), \quad \text{for each SNP and each individual} \\
\beta &\sim \mathcal{N}\Big(0, \sqrt{V_a / n}\Big) \\
E &\sim \mathcal{N}\Big(0, \sqrt{V_e}\Big) \\
P &= G\,\beta + E
\end{aligned}
$$

For two correlated polygenic traits,

$$
\begin{aligned}
p &\sim \mathrm{Uniform}(0,1) \\
G &\sim \mathrm{Binomial}(2,\, p), \quad \text{for each SNP, trait, and individual} \\
\boldsymbol{\beta} &\sim \mathcal{N}_2 \Big(
\begin{bmatrix} 0 \\ 0 \end{bmatrix},\;
\begin{bmatrix} 1 & r_g \\ r_g & 1 \end{bmatrix}
\Big) \\
\mathbf{E} &\sim \mathcal{N}_2 \Big(
\begin{bmatrix} 0 \\ 0 \end{bmatrix},\;
\begin{bmatrix}
1 - h_1^2 & r_e \sqrt{(1 - h_1^2)(1 - h_2^2)} \\
r_e \sqrt{(1 - h_1^2)(1 - h_2^2)} & 1 - h_2^2
\end{bmatrix}
\Big) \\
\mathbf{P} &= G \, \boldsymbol{\beta} + \mathbf{E}
\end{aligned}
$$

There are two mating simulation modes, random and assortative. Random mode takes a random sample of 2 parents from the population without replacement, with the probability of selection related to the function fitness(phenotype). Assortative mode (meaning that people with similar phenotypes mate together) pairs all individuals in the population and calculates the correlation of the phenotypes of Parent 1 for all pairs with phenotypes of Parent 2 for all pairs. It aims to hit a target correlation of 0.3, although this is not always possible depending on the population.

Each pair of parents produce one offspring. The offspring genotype is selected from the parent genotypes based on Mendelian genetics. If IVF screening is involved, the offspring genotype will be selected 8 times (to represent screening of cells before implantation) and the genotype that maximizes the phenotype will be selected. If gene-editing is involved, the offspring genotype will maximize the phenotype. Then, the environment, genotype, and phenotype values will be calculated as above.

[Outro Text]