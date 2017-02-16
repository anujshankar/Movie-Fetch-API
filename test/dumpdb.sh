# pg_dump -U anujshankar moviesdb -f moviesdb.sql
dropdb -U anujshankar testdb
createdb -U anujshankar testdb
psql -U anujshankar -d testdb -f moviesdb.sql