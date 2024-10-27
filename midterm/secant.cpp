#include <iostream>
#include <math.h>
#include <iomanip>
using namespace std;

double fx(double x){
	return pow(x,2)-7;
}

double cal(double x1,double x0){
	return x1-((fx(x1)*(x0-x1))/(fx(x0)-fx(x1)));
}

int main(){
	double  x0 = 0 , x1 = 2, oldx1;
	double error;
	cout<<fixed<<setprecision(12);
	do{
		oldx1 = x1;
		x1 = cal(x1,x0);
		x0 = oldx1;
		error = fabs(x0 - x1);
		cout<<" xi-1 = "<<x0<<" xi = "<< x1 <<endl;
	}while(error >= 0.000001);
}
