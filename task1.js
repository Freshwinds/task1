/**
 * Created by freshwinds on 17-7-11.
 */
var student=[["小明","1","2","3","4"],["小花","2","3","4","5"]];
var student_grade=new Array();//成绩信息  二维
var sum_grade = new Array();//总分数组 一维
var Sum_class=0;//全班总分
var i,j;
//1.计算平均分和总分
for(i=0;i<student.length;i++)
{
    var num=0;
    student_grade[i]=new Array();
    for(j=0;j<student[i].length;j++)
    {
        student_grade[i][j]=student[i][j];
        if(j!=0)
        {
            num+=Number(student_grade[i][j]);
        }
    }
    student_grade[i][j]=num;
    sum_grade[i]=num;
    Sum_class+=num;
    j++;
    student_grade[i][j]=num/4;

}
//2.计算全班总平均分
var Avg_class,
    Avg_class=Sum_class/student.length;

//计算全班总分中位数

var Middle_num;
sum_grade.sort();
var loc=parseInt(sum_grade.length/2);
if(sum_grade.length%2==1)
    Middle_num=sum_grade[loc];
else {
     var sec=loc-1;
     Middle_num = (sum_grade[loc] + sum_grade[sec]) / 2;
     }

//输出成绩单
console.log("成绩单\n姓名|数学|语文|英语|编程|平均分|总分 \n =======================");
for(i=0;i<student_grade.length;i++)
{
    var str="";
    for(j=0;j<student_grade[i].length-1;j++)
    {
        str+=String(student_grade[i][j]);
        str+="|";
    }
    str+=String(student_grade[i][j]);
    console.log(str);
}

console.log("======================\n全班总平均分"+Avg_class);
console.log("全班总分中位数："+ Middle_num);





