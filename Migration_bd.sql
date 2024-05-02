drop table if exists sous_taches;
drop table if exists taches;
drop table if exists utilisateurs;

create table utilisateurs (
	id serial primary key,
	nom varchar(30),
	prenom varchar(30),
	courriel varchar(255),
	cle_api varchar(255),
	password varchar(100)
);


create table taches(
	id serial primary key,
	utilisateur_id int,
	titre varchar(100),
	description varchar(500),
	date_debut date,
	date_echeance date,
	complete bool,
	foreign key (utilisateur_id) references utilisateurs(id)
);


create table sous_taches (
	id serial primary key,
	tache_id int,
	titre varchar(100),
	complete bool,
	foreign key (tache_id) references taches(id)
);

