#include <iostream>
#include <math.h>
#include <iomanip>
using namespace std;

double fx(double x){
	return pow(x,2)-7;	
}

double diff(double x){
	return 2*x;
}

int main(){
	double x = 2.0,oldx,error;
	cout<<fixed<<setprecision(12);
	do{
		oldx = x;
		x = oldx - (fx(oldx) / diff(oldx));
		error = fabs(x - oldx);
		cout<<" x = "<<x<<" error = "<<error<<endl;
	}while(error >= 0.000001);
}
