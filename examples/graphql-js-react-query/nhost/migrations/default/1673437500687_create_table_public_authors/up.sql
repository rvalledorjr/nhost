CREATE TABLE public.authors (id uuid DEFAULT gen_random_uuid() NOT NULL, name text NOT NULL, age int4 NOT NULL, PRIMARY KEY (id));
