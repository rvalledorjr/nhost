CREATE TABLE public.todos (id uuid DEFAULT gen_random_uuid() NOT NULL, title text NOT NULL, done bool NOT NULL, PRIMARY KEY (id));
