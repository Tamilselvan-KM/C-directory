:'
question7

Write a shell script that given a person's uid, tells you how many times that person is logged on. (who, grep, wc)
'
userLogCnt = $(who | grep $USER | wc -l)
echo "$userLogCnt times logged as $USER" 