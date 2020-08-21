### Exercício 1

a) FOREIGN KEY é uma chave usada para ligar duas tabelas. Ela se refere à PRIMARY KEY em outra tabela. A tabela que contém a chave estrangeira é chamada de tabela filha e a tabela que contem a chave primária é a tabela pai.

b)
```
INSERT INTO Rating VALUES
    ('d', 'Um filme nacional que entrou para história do cinema brasileiro. Com muito carisma e com atores consagrados da tv brasileira. Essa troca de sexo é engraçadíssima e voce não pode perder a melhor atuação de Tony Ramos. Hilariante e com piadas e cenas perfeitas, um dos clássicos nacionais com certeza.', 10, '001'),
    ('b', 'Opção leve, agradável e divertida para preencher os fins de noite, do tipo ideal para se assistir em família. O roteiro guarda lá suas surpresas e sua graça, mas é no geral óbvio e morno.', 8, '002'),
    ('c', 'Dona Flor acerta ao falar abertamente sobre o desejo sexual da mulher e tratar disso sem rodeios ou piadas. Um dos grandes acertos de Dona Flor e Seus Dois Maridos é sua protagonista Juliana Paes.', 8, '003'),
    ('e', 'Esse filme mostrou que a evolução do nosso cinema, desde "Cidade de Deus" e "Carandirú" que estavam tentando fazer um filme impactante, inclusive acho que os dois serviram de lição pra chegar a esse patamar. Um filme com cenas cruas e nervosas que mexe conosco... excelente!', 9, '005'),
    ('f', 'EFilmaço brasileiro, um dos melhores de todos os tempos, grandes atuações, roteiro inteligente, linda trilha sonora, bela montagem, tudo muito bem feito. Ótimo filme.', 9, '006');
```

c) ` Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`mello_renata_karato`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`)) `

O erro diz que não é possível adicionar uma linha filha, pois há restrição na chave estrangeira, no caso, a chave estrangeira passada é inválida.

d) `ALTER TABLE Movie DROP COLUMN rating;`

e) `Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`mello_renata_karato`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))`

O erro diz que não é póssível excluir uma linha pai que tem restrição por uma chave estrangeira filha. 

### Exercício 2

a) Esta tabela pega o id do filme da tabela Movie e o id do ator da tabela Actor e junta para representar o elenco do filme.

b) 
```
INSERT INTO MovieCast VALUES
    ('001', '001'),
    ('001', '002'),
    ('003', '006'),
    ('004', '004'),
    ('005', '005'),
    ('004', '003'),
    ('006', '001');
```

c) `Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`mello_renata_karato`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
`
O erro diz que não é possível adicionar uma linha filha, pois há restrição na chave estrangeira, no caso, a chave estrangeira passada é inválida.

d) `Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`mello_renata_karato`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
`

O erro diz que não é póssível excluir uma linha pai que tem restrição por uma chave estrangeira filha. 

### Exercício 3

a) O operador ON faz com que a tabela Rating se junte com a tabela Movie, desde que exista avaliações existentes do filme.

b) 
```
SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
```

### Exercício 4

a)
```
SELECT m.id as movie_id, m.title, r.rate as rating, r.comment as rating_comment FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id;
```

b) 
```
SELECT m.id as movie_id, m.title, mc.actor_id FROM Movie m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;
```

c)
```
SELECT AVG(r.rate), m.id, m.title FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY (m.id);
```

### Exercício 5

a) Existe dois JOIN porque está sendo juntado a tabela MovieCast e a tabela Actor junto com a tabela Movie.

b) 
```
SELECT m.id as movie_id, m.title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

c) 
```
SELECT 
	m.id as movie_id, 
    m.title, 
    a.id as actor_id, 
    a.name, 
    r.rate, 
    r.comment 
FROM Movie m
LEFT JOIN Rating r on r.movie_id = m.id
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

