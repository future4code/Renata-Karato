### Exercício 1
a) `ALTER TABLE Actor DROP COLUMN salary;` - este comando excluiria a coluna "salary" da tabela de atores;

b) `ALTER TABLE Actor CHANGE gender sex VARCHAR(6);` - altera o tipo da coluna gender da tabela de atores para "VARCHAR(6)", além de alterar o nome "gender" para "sex";

c) `ALTER TABLE Actor CHANGE gender gender VARCHAR(255);` - volta a configuração original, que estava antes da alteração realizada no item b). O VARCHAR volta a ser 255 e o nome "sex" é alterado para "gender";

d) `ALTER TABLE Actor CHANGE gender gender VARCHAR(100)`.

### Exercício 2

a)
````
UPDATE Actor
SET name =  "Susana Vieira", birth_date = "1942-08-23"
WHERE id=003
````

b) 
```
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name="Juliana Paes";
```
```
UPDATE Actor
SET name = "Juliana Paes"
WHERE name="JULIANA PÃES";
```

c) 
```
UPDATE Actor
SET 
    name="Caio Castro", 
    salary=750000, 
    birth_date="1989-01-22", 
    gender="male", 
    hometown="São Paulo"
WHERE id=005;
```

d) Resultado:`0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0`. Não houve erro, a tabela não foi afetada.

### Exercício 3

a) `DELETE FROM Actor WHERE name= "Fernanda Montenegro";`

b) `DELETE FROM Actor WHERE gender="male" AND salary > 1000000;`

### Exercício 4

a) `SELECT MAX(salary) FROM Actor;`

b) `SELECT MIN(salary) FROM Actor WHERE gender= "female";`

c) `SELECT COUNT(*) FROM Actor WHERE gender = "female"`

d) `SELECT SUM(salary) FROM Actor;`

### Exercício 5

a) A útima query conta o número de atores de acordo com o seu gênero. Ou seja, retorna N atores do sexo feminino e N atores do sexo masculino;

b) 
```
SELECT id, name FROM Actor
ORDER BY name ASC;
```

c) 
```
SELECT * FROM Actor
ORDER BY salary ASC;
```

d)
```
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
```

e) 
```
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;
```
### Exercício 6

a) `ALTER TABLE Movie ADD playing_limit_date VARCHAR(255);`

b) `ALTER TABLE Movie CHANGE rating rating FLOAT;`

c) `UPDATE Movie SET playing_limit_date = "2020-12-31" WHERE id=001;`

d) `DELETE FROM Movie WHERE id = "001"`

### Exercício 7

a) `SELECT COUNT(*) FROM Movie WHERE rating > 7.5;`

b) `SELECT AVG(rating) FROM Movie;`

c) `SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();`

d) `SELECT COUNT(*) FROM Movie WHERE release_date < CURDATE();`

e) `SELECT MAX(rating) FROM Movie;`

f) `SELECT MIN(rating) FROM Movie;`

### Exercício 8

a) `SELECT * FROM Movie ORDER BY name;`

b) `SELECT * FROM Movie ORDER BY name DESC LIMIT 5;`

c) `SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;`

d) `SELECT * FROM Movie 
ORDER BY rating DESC 
LIMIT 3;`

  
