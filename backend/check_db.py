import psycopg2

try:
    conn = psycopg2.connect('postgresql://postgres:Mango%40292@localhost:5432/spam_detection')
    cur = conn.cursor()
    
    # Check tables
    cur.execute("SELECT table_name FROM information_schema.tables WHERE table_schema='public'")
    tables = cur.fetchall()
    print('Tables:', tables)
    
    # Check users count
    cur.execute('SELECT COUNT(*) FROM users')
    print('Users count:', cur.fetchone()[0])
    
    # Check messages count  
    cur.execute('SELECT COUNT(*) FROM messages')
    print('Messages count:', cur.fetchone()[0])
    
    # Show some users
    cur.execute('SELECT id, name, email, role FROM users LIMIT 5')
    users = cur.fetchall()
    print('Sample users:', users)
    
    conn.close()
    print('Database connection and data access successful!')
    
except Exception as e:
    print(f'Error: {e}')
