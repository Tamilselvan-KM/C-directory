: '
question6

Write a shell script called see taking a filename name as argument which uses ls if the file's a directory and more if the file's otherwise (test)
'
Test_args(){
	if[-d $1 ]
	then 
		echo "The passing args is a Directory"
	elif[-f $1]
	then
		echo "The passing args is a File"
	else
		echo "The passing args is not exist on the system"
	fi
}

Test_args file.txt