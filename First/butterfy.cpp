#include<iostream>
using namespace std;

int main(){
    int n=4;
    for(int i = 0; i<n; i++){
        for(int j = 0; j<=i; j++){
            cout<<"*";
        }
        for(int j=n; j>=2*i-3; j--){
            cout<<" ";
        }
        for(int j = 0; j<=i; j++){
            cout<<"*";
        }
        cout<<endl;
    }
    return 0;
}
