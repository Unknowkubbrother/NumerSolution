#include <iostream>
#include <cmath>
#include <iomanip>
using namespace std;

double fx(double xM){
	return pow(xM,4)-13;
}

int main(){
	double xL = 1.5, xR = 2.0;
	double fxR,fxL,xM = 0,fxM,oldxM,error;
	int round = 0;	
	cout<<fixed<<setprecision(12);
	do{
		round++;
		oldxM = xM;
		xM = (xL+xR)/2;
		fxM = fx(xM);
		fxR = fx(xR);
		if (fxM * fxR > 0){
			xR = xM;
		}else{
			xL = xM;
		}
		error = fabs(xM - oldxM);
		cout<<round<<" oldXm = "<<oldxM<<" xM = "<<xM<<" error = "<<error<<endl;
	}while(error >= 0.000001);
}
