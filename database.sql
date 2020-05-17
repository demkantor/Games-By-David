--create database
CREATE DATABASE games_by_david;

--create tables
CREATE TABLE "games_played" (
  "id" SERIAL PRIMARY KEY,
  "memory" INT,
  "tic" INT,
  "whack" INT,
  "snake" INT,
  "connect" INT,
  "tetris" INT,
  "space" INT,
  "life" INT
);

CREATE TABLE "memory" (
  "id" SERIAL PRIMARY KEY,
  "best_time" INT
);

CREATE TABLE "tic" (
  "id" SERIAL PRIMARY KEY,
  "x_won" INT,
  "o_won" INT
);

CREATE TABLE "whack" (
  "id" SERIAL PRIMARY KEY,
  "high_score" INT
);

CREATE TABLE "snake" (
  "id" SERIAL PRIMARY KEY,
  "high_score" INT
);

CREATE TABLE "connect" (
  "id" SERIAL PRIMARY KEY,
  "blue_won" INT,
  "red_won" INT
);

CREATE TABLE "tetris" (
  "id" SERIAL PRIMARY KEY,
  "high_score" INT
);

CREATE TABLE "space" (
  "id" SERIAL PRIMARY KEY,
  "best_time" INT
);

CREATE TABLE "life" (
  "id" SERIAL PRIMARY KEY,
  "longest_run" INT
);

--enter some started data
INSERT INTO "games_played" ("memory", "tic", "whack", "snake", "connect", "tetris", "space", "life")
VALUES (4, 33, 9, 8, 1, 12, 32, 2);

INSERT INTO "memory" ("best_time")
VALUES (65);

INSERT INTO "tic" ("x_won", "o_won")
VALUES (12, 4);

INSERT INTO "whack" ("high_score")
VALUES (53);

INSERT INTO "snake" ("high_score")
VALUES (12);

INSERT INTO "connect" ("blue_won", "red_won")
VALUES (6, 3);

INSERT INTO "tetris" ("high_score")
VALUES (70);

INSERT INTO "space" ("best_time")
VALUES (33);

INSERT INTO "life" ("longest_run")
VALUES (4000);

