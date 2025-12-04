---
layout: default
title: Population-Level Impacts
---

## Introduction

As mentioned in the introduction, a major argument favoring the wide unregulated use of gene editing services is the fulfilment of the autonomy of parents to exercise control over their kids based on the idea that they have the highest incentive to act in the best interest of the children being edited. Such arguments call into question whether the sole recipient and beneficiary of gene editing services are the children (and parents of the child) upon who germline editing or selection is being used. Multiple geneticists have alluded to the idea that the widespread use of germline editing will have repercussions for shaping the population level genetics of humans. Jennifer Doudna, who won the Nobel for her work on CRISPR, also writes about the potential CRISPR has for changing human genetics on a population level. Widespread changes would be a result of widespread use and while it would take hundreds of thousands of years before noticeable changes to human genetics occur on a population level, it calls into question whether it is our duty as humans to consider the very distant future of humanity when making reproductive decisions. To illustrate how germline editing has the potential to make ripples in population genetics, we have created a simulation where you can test out the impact of different germline editing and IVF decisions on future generations' diversity.

## Key Definitions and Terms

Before trying out this tool, we wanted to illustrate a few key concepts in genetics.

1. Gene: A gene is any heritable piece of DNA that makes a functional protein or RNA. For each gene in our body, we have two copies: a maternal and paternal copy.  
2. Allele: Genetic diversity is the result of multiple different versions of the same gene. An allele is the term for a specific form of a gene. A classical definition of evolution in population genetics frames it as a change in allele frequency over time. This means that the ratios of alleles of a specific gene are a good way to measure changes across a population.  
3. Trait: A trait is a heritable quality.
4. Genotype: Genetic variants of a trait.
5. Phenotype: The physical effect of a genotype.
6. Fitness: Strictly speaking, fitness is defined as the ability for a gene or trait to confer increased potential for heritability of that trait. For instance, a gene or trait with a higher fitness is one that most likely creates adults that are able to mate and pass on the trait to a future generation.
7. Monogenic trait: A monogenic trait is a trait that is controlled by a singular gene in the entire genome.
8. Recessive trait: A recessive trait is when both copies of a gene in our body must be the same allele for that allele to portray a trait. For instance, if our maternal copy is allele A and paternal copy is allele a, the effect of the paternal copy would be entirely masked by the maternal copy. So, for a human to have the trait and therefore the fitness effects of allele a, both parents/ copies of the gene must be the same recessive allele.
9. Polygenic trait: A polygenic trait is a trait that is controlled by a network of many genes in the entire genome.
10. Loci: A locus is a position on the genome where a gene lies. Think about it as a coordinate system for your genome and the loci are the coordinates.
11. Single Nucleotide Polymorphism (SNP): SNPs are how we often identify or mark the coordinates of a loci/ gene using known variations in single nucleotides across a population.

## Learn about IVF, Gene Editing, and Population Genetics:

<a href="https://colab.research.google.com/drive/1SO0jvVLpoY9g3-dU-fgFxAhxk2q8u0_3?usp=sharing" style="display:inline-block; transform: scale(2.2); transform-origin: top left;">
  <img src="https://img.shields.io/badge/Try%20the%20Simulation-FF6F00?style=for-the-badge&logo=googlecolab&logoColor=white">
</a>



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

## Simplified Explanation of Mathematical Model

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

For an uncorrelated polygenic trait, where betas are the effect sizes of each SNP,

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

## What are some questions you can ask yourself while using the simulation?

1. How does the spread/ proportion of people using germline editing or IVF influence the popularity, heritability and frequency of traits?
2. What happens when there is a negative correlation between two traits while one is selected for? This is called antagonistic pleiotropy: when the selection of one desirable trait leads to a decrease in another desirable trait. Think of it as the unfortunate consequence of selecting for certain desirable traits.
3. How does allele frequency affect the phenotype distribution in monogenic vs polygenic traits?
4. How does increasing the population size impact how long it takes for the same allele frequency changes?
5. If a majority of the population begins to employ germline editing, what would diversity in allele frequency for monogenic traits look like?

## Examples (fill in, try this)

<iframe 
  src="https://docs.google.com/gview?url=https://docs.google.com/document/d/1p40ONdImGQTY8cOzj43KyOeredIPU3DPtQgcsjzxc3c/export?format=pdf&embedded=true"
  style="width:100%; height:700px;" 
  frameborder="0">
</iframe>

[Download PDF](https://docs.google.com/document/d/1p40ONdImGQTY8cOzj43KyOeredIPU3DPtQgcsjzxc3c/export?format=pdf)
