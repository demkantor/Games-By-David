--create database
CREATE DATABASE games_by_david;

--create tables
CREATE TABLE "high_scores" (
  "id" SERIAL PRIMARY KEY,
  "memory" INT,
  "whack" INT,
  "snake" INT,
  "connect" INT,
  "tetris" INT,
  "space" INT
);

--enter some started data
INSERT INTO "high_scores" ("memory", "whack", "snake", "connect", "tetris", "space")
VALUES (4, 53, 8, 1, 70, 22);