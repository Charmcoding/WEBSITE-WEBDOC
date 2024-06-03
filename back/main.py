import sqlite3

conn = sqlite3.connect('db.sqlite3')
c = conn.cursor()

# Lire les données
c.execute("SELECT * FROM patients")
rows = c.fetchall()
for row in rows:
    print(row)

conn.close()
