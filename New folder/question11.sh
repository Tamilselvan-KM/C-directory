: '
question11

Write a script, digits.sh, to find the sum of the numbers between 1000 and 2000 (inclusive)
having digits only from the set {0, 1}.
Hint: Use a brace expansion to generate the range of numbers, a loop to check each one, and
a conditional statement including a regular expression to check whether the four digits are in
{0, 1}).
Hint: In emacs, run M-x sh-mode to get help with code formatting including indenting.
'
digitLimit = 2000
sum = 0
for((i=1000; i<digitLimit; i++))
do
	sum = $(( sum + i ))
done
echo $sum
bin = $(echo "obase=2;$sum" | bc)
echo $bin 
