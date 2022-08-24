:'
question10

Write a script five_dirs.sh that does these tasks:
– make a directory five
– make five subdirectories five/dir1 through five/dir5
– in each subdirectory, make four files, file1 through file4, such that file1 has one line
containing the digit 1, file2 has two lines, each containing the digit 2, ..., and file4
has four lines, each containing the digit 4
Use nested loops and elegant code. (That is, do not write a brute-force solution that calls
mkdir 6 times and has 20 commands to write the 20 files.)
Hint: A convenient way to remove the five directory and all its files is rm -r five (search
the rm manual page for -r to see what it does), so a convenient way to rerun the scrip several
times as you develop it is rm -r five; five_dirs.sh
'
mkdir five
n = 5
for(( i=1; i<$n; i++))
do
	mkdiv five/dir$i
	for(( j=1; j<=4; j++))
	do
	touch five/dir$i/file$j
	if[ $j -eq 1]
	then
		echo "1 - Hi, This is first file and its containing single digit" > five/$dir$i/file$j
	elif[ $j -eq 2]
	then
		echo "11 - Hi, This is second file 
		      22 - its containing double digits" > five/$dir$i/file$j
	elif[ $j -eq 3]
	then
		echo "111 - Hi,
		      222 - This is third file its containing 
		      333 - triple digits" > five/$dir$i/file$j
	elif[ $j -eq 4]
	then
		echo "1111 - Hi,
		      2222 - This is fourth file 
		      3333 - its containing 
		      4444 - four digits" > five/$dir$i/file$j
	fi
	done
done
