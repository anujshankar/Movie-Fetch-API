--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.1
-- Dumped by pg_dump version 9.6.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: actors; Type: TABLE; Schema: public; Owner: anujshankar
--

CREATE TABLE actors (
    id integer NOT NULL,
    actorname text NOT NULL,
    moviename text NOT NULL
);


ALTER TABLE actors OWNER TO anujshankar;

--
-- Name: actors_id_seq; Type: SEQUENCE; Schema: public; Owner: anujshankar
--

CREATE SEQUENCE actors_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE actors_id_seq OWNER TO anujshankar;

--
-- Name: actors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: anujshankar
--

ALTER SEQUENCE actors_id_seq OWNED BY actors.id;


--
-- Name: movies; Type: TABLE; Schema: public; Owner: anujshankar
--

CREATE TABLE movies (
    id integer NOT NULL,
    name text NOT NULL,
    studio text NOT NULL,
    releasedate date
);


ALTER TABLE movies OWNER TO anujshankar;

--
-- Name: movies_id_seq; Type: SEQUENCE; Schema: public; Owner: anujshankar
--

CREATE SEQUENCE movies_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE movies_id_seq OWNER TO anujshankar;

--
-- Name: movies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: anujshankar
--

ALTER SEQUENCE movies_id_seq OWNED BY movies.id;


--
-- Name: actors id; Type: DEFAULT; Schema: public; Owner: anujshankar
--

ALTER TABLE ONLY actors ALTER COLUMN id SET DEFAULT nextval('actors_id_seq'::regclass);


--
-- Name: movies id; Type: DEFAULT; Schema: public; Owner: anujshankar
--

ALTER TABLE ONLY movies ALTER COLUMN id SET DEFAULT nextval('movies_id_seq'::regclass);


--
-- Data for Name: actors; Type: TABLE DATA; Schema: public; Owner: anujshankar
--

COPY actors (id, actorname, moviename) FROM stdin;
1	Actor 1	Movie 1
2	Actor 1	Movie 2
3	Actor 1	Movie 5
4	Actor 2	Movie 2
5	Actor 2	Movie 3
6	Actor 3	Movie 1
7	Actor 3	Movie 2
8	Actor 3	Movie 3
9	Actor 3	Movie 5
10	Actor 3	Movie 6
\.


--
-- Name: actors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: anujshankar
--

SELECT pg_catalog.setval('actors_id_seq', 10, true);


--
-- Data for Name: movies; Type: TABLE DATA; Schema: public; Owner: anujshankar
--

COPY movies (id, name, studio, releasedate) FROM stdin;
35	Movie 4	dreamworks	2015-01-01
32	Movie 1	paramount	2015-10-01
33	Movie 2	paramount	2016-10-01
34	Movie 3	paramount	2016-11-01
36	Movie 5	dreamworks	2016-02-01
37	Movie 6	dreamworks	2016-03-01
\.


--
-- Name: movies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: anujshankar
--

SELECT pg_catalog.setval('movies_id_seq', 37, true);


--
-- Name: actors actors_pkey; Type: CONSTRAINT; Schema: public; Owner: anujshankar
--

ALTER TABLE ONLY actors
    ADD CONSTRAINT actors_pkey PRIMARY KEY (id);


--
-- Name: movies movies_pkey; Type: CONSTRAINT; Schema: public; Owner: anujshankar
--

ALTER TABLE ONLY movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

