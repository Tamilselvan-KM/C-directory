: '	
Create a Shell script to check if a process "xyz" (input from screen) is running. Print "Yes" if running, "No" if not running
'
processIn = "xyz"
if ps | grep "$processIn"
then
	echo "Yes"
else
	echo "No"
fi