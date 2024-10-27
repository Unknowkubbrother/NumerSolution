#include <iostream>
#include <cmath>
#include <iomanip>
using namespace std;
double fx(double x){
	return pow(x,4)-13;
}

double calx1(double xL,double xR,double fxR, double fxL){
	return (xL*fxR-xR*fxL)/(fxR-fxL);
}

int main(){
	double xL = 1.5, xR = 2.0;
	double fxR,fxL,x1 = 0,fx1,oldx1,error;
	int round = 0;	
	cout<<fixed<<setprecision(12);
	do{
		round++;
		oldx1 = x1;
		fxR = fx(xR);
		fxL = fx(xL);
		x1 = calx1( xL, xR, fxR,  fxL);
		fx1 = fx(x1);
		if (fx1 * fxR > 0){
			xR = x1;
		}else{
			xL = x1;
		}
		error = fabs(x1 - oldx1);
		cout<<round<<" oldX1 =  "<<oldx1<<" x1 = "<<x1<<" error = "<<error<<endl;
	}while(error >= 0.000001);
}
