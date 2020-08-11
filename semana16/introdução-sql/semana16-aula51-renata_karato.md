### Exercício 1
a) ` CREATE TABLE ` - cria uma tabela, que recebe o nome da tabela e os nomes e tipos de cada coluna;
` VARCHAR(n) ` - indica uma string, onde o "n" é o número máximo de caracteres;
` PRIMARY KEY ` - identifica unicamente cada registro de uma tabela. Toda Primary Key deve ter um valor único e não pode conter valores nulos. Cada tabela deve conter apenas uma Primary Key;
` NOT NULL ` - define que uma coluna não poderá receber valores nulos, não pode ficar sem valor preenchido;
` DATE ` - representa uma data (YYYY-MM-DD).

b) ` SHOW DATABASES ` - permite ver os bancos de dados presentes no sistema;
` SHOW TABLES ` - mostra as tabeles existentes no banco de dados atual.

c) ` DESCRIBE ` - este comando junto com o nome da tabela, retorna os detalhes desta. No caso, retornou o nome das colunas, seus tipos, se é null ou não etc.


### Exercício 2
a) 
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002",
  "Glória Pires",
  1200000,
  "1963-08-23",
  "female"
  );
 ```

b) O erro:
```
Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
```
Diz que a entrada "002" foi duplicada e portanto, a Primary Key não pode aceitar.

c) O erro:
```
*Error Code: 1136. Column count doesn't match value count at row 1
```
Diz que a contagem de colunas não corresponde à contagem de valores na linha 1. Ou seja, para que funcione, a query deveria estar desta forma:

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

d) O erro:
```
Error Code: 1364. Field 'name' doesn't have a default value
```
Diz que o campo "nome" não tem um valor padrão. Ou seja, é necessário inserir o campo nome. Assim, a query correta ficaria da seguinte forma:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```

e) O erro:
```
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
```
Diz que o valor de data está incorreto: "1950" para a coluna "birth_date" na linha 1. O A query é corrigida ao colocarmos a data de nascimento entre aspas.
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

f) Ator:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Thiago Lacerda",
  500000,
  "1978-01-19", 
  "male"
);
```
Atriz:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Malu Mader",
  300000,
  "1966-09-12", 
  "female"
);
```
### Exercício 3

a) 
```
SELECT * from Actor WHERE gender = "female";
```

b)
```
SELECT salary from Actor WHERE name = "Tony Ramos";
```

c)
```
SELECT * from Actor WHERE gender = "invalid";
```
Não houve nenhum erro, porém não foi retornada nenhuma informação.

d)
```
SELECT id, name, salary from Actor WHERE salary < 500000; 
```

e) O erro foi:
```
Error Code: 1054. Unknown column 'nome' in 'field list'
```
Diz que a coluna "nome" na lista de campos é desconhecida. Isto ocorre, porque na verdade o campo é "name".
```
SELECT id, name from Actor WHERE id = "002";
```

### Exercício 4

a) A query indica que estamos procurando todos os atores cujos nomes se iniciam com a letra "A"
 ou "J". Para realizar esta pesquisa, utilizamos o termo "LIKE. E é necessários que além de retornar os atores com as iniciais dessas letras, que eles também tenham um salário maior que R$300.000.
 
 b)
 ```
 SELECT * from Actor WHERE (name NOT LIKE "A%") AND salary > 350000;
 ```
 
 c)
 ```
 SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";
 ```
 
 d)
 ```
 SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;
  ```
  
### Exercício 5

a)
```
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL, 
    release_date DATE NOT NULL,
    rating INT NOT NULL
);
```

b)
```
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);
```

c)
```
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES(
	"002",
    "Doce De Mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);
```

d)
```
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);
```

e)
```
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES(
	"004",
    "Central do Brasil",
    "Dora trabalha escrevendo cartas para analfabetos na estação Central do Brasil, no centro do Rio de Janeiro. Ainda que a escrivã não envie todas as cartas que escreve, ela decide ajudar um menino, após sua mãe ser atropelada, a tentar encontrar o pai que nunca conheceu, no interior do Nordeste.",
    "1998-04-03",
    10
);
```
  
### Exercício 6

a)
```
SELECT id, name, rating FROM Movie WHERE id = "001";
```

b)
```
SELECT * FROM Movie WHERE name = "Central do Brasil";
```

c) 
```
SELECT id, name, synopsis FROM Movie WHERE rating > 7;
```

### Exercício 7

a)
```
SELECT * FROM Movie WHERE name LIKE "%vida%";
```

b) 
```
SELECT * FROM Movie WHERE name LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%";
```

c) 
```
SELECT * FROM Movie WHERE release_date < "2020-08-10";
```

d)
```
SELECT * FROM Movie WHERE release_date < CURDATE() AND (name LIKE "%TERMO DE BUSCA%") OR rating > 7;
```

