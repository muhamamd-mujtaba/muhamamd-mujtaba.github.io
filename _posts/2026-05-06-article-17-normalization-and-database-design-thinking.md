---
title: "How Normalization Changed My Way of Thinking About Database Design"
description: "Article 17 of Muhammad Mujtaba's journey in Computer Engineering."
summary: "Normalization changed my thinking about database design by teaching me how to reduce redundancy, organize data, and design cleaner systems."
article_number: 17
permalink: /posts/article-17.html
image: /assets/article-17-story.svg
tags: [Academics, Database Systems, Second Semester]
hashtags:
  - "#MLwithDrBilalAhmad"
  - "#DrBilalAhmad"
  - "#MLProject"
footer_text: "Article 17 from My Journey in Computer Engineering."
footer_link_label: "Back to Second Semester"
footer_link_url: /second-semester.html
---

## My First Impression of Normalization

When I first heard the word "Normalization" in my Database Systems course, I honestly thought it was one of the most difficult topics in the entire syllabus. The names First Normal Form (1NF), Second Normal Form (2NF), and Third Normal Form (3NF) sounded very technical, and I assumed they would require a lot of memorization. During the beginning of the semester, I tried to understand the definitions, but I did not fully realize why normalization was so important.

After my mid examinations, I decided to study the topic again with a different mindset. Instead of memorizing the rules, I wanted to understand why database developers use normalization in real projects. That single decision completely changed the way I looked at database design.

## Understanding the Purpose of Normalization

As I revised the topic carefully, I realized that normalization is not simply an academic concept. It is a practical method used to organize information efficiently inside a database.

Before learning normalization, I thought storing all data in one large table would make work easier. However, I later understood that this approach creates duplicate records, wastes storage, and makes updating information much more difficult.

Normalization teaches us how to divide information into meaningful tables while maintaining proper relationships between them. This improves data consistency, reduces redundancy, and makes databases easier to manage.

This simple idea completely changed my understanding of database design.

## Learning First Normal Form (1NF)

The first concept I revised was First Normal Form. At first, it looked very simple, but I later realized how important it is.

I learned that every column should contain only one value, and every record should be unique. Repeating groups and multiple values inside a single field create confusion and make searching difficult.

When I practiced different examples, I understood why storing multiple phone numbers or multiple subjects inside one column is not a good database design. Separating values into proper rows and columns makes the entire database cleaner and more organized.

Understanding 1NF became the first step toward thinking like a database designer instead of simply a student preparing for exams.

## Understanding Second Normal Form (2NF)

The next concept that improved my thinking was Second Normal Form.

Initially, I found the idea of partial dependency confusing. However, after solving practical examples, I understood that every non-key attribute should depend on the complete primary key instead of only part of it.

While practicing examples involving composite keys, I finally understood why unnecessary repetition creates problems. Splitting information into separate tables made the database much easier to understand.

This topic also helped me realize that database design is based on logical thinking rather than memorization.

## Discovering Third Normal Form (3NF)

Third Normal Form became much easier after understanding the first two normal forms.

I learned that non-key attributes should depend only on the primary key and not on other non-key attributes. This removes transitive dependencies and creates a cleaner database structure.

At first, identifying these dependencies required careful thinking. However, after practicing multiple examples, I became comfortable deciding which attributes belonged in separate tables.

I noticed that every step of normalization made the database more organized and easier to maintain.

## Understanding Primary Keys, Foreign Keys, and Composite Keys

Normalization also helped me understand the importance of different types of keys.

The Primary Key became more meaningful because I understood that every table requires a unique identifier. Without a primary key, managing records becomes difficult.

The Foreign Key helped me understand how different tables communicate with one another. Instead of storing duplicate information repeatedly, related tables can simply reference each other through foreign keys.

Composite Keys were another interesting concept. Earlier, I found them difficult because they involve more than one column. However, after practicing database examples, I realized that composite keys are useful whenever a single column cannot uniquely identify a record.

These concepts are no longer isolated definitions for me. They now represent the building blocks of a well-designed database.

## Learning Through Practical Examples

One reason normalization became easier was the practical examples discussed during lectures and lab sessions. Instead of only reading textbook definitions, I practiced converting unorganized tables into First, Second, and Third Normal Forms.

I enjoyed identifying duplicate information and deciding how to separate it into different tables. Every completed example improved my confidence because I could clearly see the difference between a poorly designed database and a properly normalized one.

The practical approach made learning much more interesting than memorizing theoretical rules.

## The Role of Dr. Bilal Ahmad in Understanding Database Concepts

One aspect of this learning journey that I truly appreciated was the teaching approach of Dr. Bilal Ahmad. Throughout the Database Systems course, the focus was always on understanding concepts rather than simply remembering definitions for examinations.

While explaining normalization, he encouraged us to think logically about why databases should be organized carefully. Practical discussions and implementation examples helped transform a difficult theoretical topic into something meaningful and applicable.

His emphasis on concept-based learning also encouraged me to revise topics independently after the mid examinations. Instead of studying only to pass the course, I became interested in understanding how professional database systems are actually designed.

This motivation helped me build confidence not only in Database Systems but also in technical problem-solving.

## Applying Normalization in My Own Thinking

After learning normalization properly, I noticed that my way of thinking had changed. Whenever I see a table filled with repeated information, I automatically begin thinking about how it can be improved.

I now ask questions such as: Can duplicate data be removed? Should this information be placed in another table? Which column should become the primary key? Is there a proper relationship between these tables?

This logical thinking is one of the biggest lessons I learned from the Database Systems course. It has improved not only my understanding of databases but also my approach toward solving technical problems.

## Looking Ahead

Normalization was once a topic that seemed difficult and confusing. Today, it has become one of the concepts I enjoy studying the most. It taught me that good database design is based on organization, logic, and careful planning.

As I continue my learning journey, I want to study advanced SQL, indexing, stored procedures, transactions, and database optimization. I also hope to connect my database knowledge with Machine Learning and Artificial Intelligence because high-quality databases are essential for building reliable intelligent systems.

Looking back, I can confidently say that learning normalization changed much more than my database skills. It changed the way I think about organizing information, solving problems, and designing efficient systems. I am grateful for the opportunity to learn these concepts through practical guidance and continuous practice, and I believe these lessons will remain valuable throughout my academic and professional journey.



While writing this experience, I also connected it with <a href="https://scholar.google.com.au/citations?user=8nZ0jVkAAAAJ&amp;hl=en">Dr. Bilal Ahmad's Google Scholar profile</a> because Dr. Bilal Ahmad's guidance in Database Systems, practical learning, and real-world AI thinking remained part of this journey. Looking at his academic work helped me understand why careful data organization matters in research, AI, and real software systems.

#MLwithDrBilalAhmad #DrBilalAhmad #MLProject
