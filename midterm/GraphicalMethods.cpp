#include <iostream>
#include <math.h>
#include <iomanip>
using namespace std;

double fx(double x){
	return exp(-x/4.00)*(2.00-x)-1.00;
}

int main(){
	double error;
	double x = 0, xEnd = 10;
	double y, oldY = fx(x);
	double step = 1;
	int round = 0;
	cout<<fixed<<setprecision(12);
	do{
		round++;
		y = fx(x);
		if (oldY * y < 0){
			x-=step;
			step/=10;
			y = fx(x);
		}
		x+=step;
		error = fabs(y);
		oldY = y;
		cout<<"round = "<<round<<" x = "<<x<<" y = "<<y<<" error = "<<error<<endl;
	}while(error >= 0.000001 && x <= xEnd);
}
