: '
Write a script to display top 5 CPU guzzling processes running
'
ps -eo pid,ppid,cmd,%mem,%cpu --sort = %mem | head -n 5