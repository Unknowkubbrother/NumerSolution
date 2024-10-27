#include <iostream>
#include <math.h>
#include <iomanip>
using namespace std;

double cal(double x){
	return (x+sqrt(7))/2;
}

int main(){
	double x = 0,oldx;
	double error;
	cout<<fixed<<setprecision(6);
	do{
		oldx = x;
		x = cal(x);
		error = fabs(x-oldx);
		cout<<"old x = "<<oldx<<" x = "<<x<<" error = "<<error<<endl;
	}while(error >= 0.000001);
}
