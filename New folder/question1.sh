:'
question 1
Write a shell script which will poll a folder for a file in a folder and move it to another folder when the file is available.
'
isFile = wc -w < 
if["$isFile" != 0]
then 
mv file2 file1
echo "The file is moved"
else
echo "File is not available"
fi