import sqlite3

conn = sqlite3.connect('db.sqlite3')
c = conn.cursor()

c.execute("INSERT INTO patient(id,name, age) VALUES (12,'Morsli', 25)")

conn.commit()
conn.close()

