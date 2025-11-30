---
layout: default
title: Pseudoscientific Ideas in Genetics
---

### Aims of Our Model

### Results on Genetic Editing/IVF Screening Company Websites and Ethics Statements

### Try out our ML Model here: https://colab.research.google.com/drive/10NGgPJCPEChjooKmUz8Ngk5bMfdTgtLG?usp=sharing

### Dataset Collection

### Model Details
The aim of our ML model was to classify text on the websites of genetic editing/IVF screening companies as a Medical Need or a Social Need, indicating whether these companies viewed these methods as a solution to medical problems or to social ones. The base of the model is roBERTa-base, which we chose to use because of its small size and relative success with small training datasets. The model was finetuned on a dataset of 400 entries total, and a training-testing split of 80-20. Three epochs were used with a learning rate of 2e-5. The model is uploaded to HuggingFace at https://huggingface.co/mlalwani2004/designer-baby-text-classification. 

### Model Accuracy