// Sieve_of_Eratosthenes.cpp : This file contains the 'main' function. Program execution begins and ends there.
//vERSION 2

#include <iostream>

using namespace std;

int main()
{
    int n = 1000;
    int arrayVar[1000];
    arrayVar[0] = 0;
    arrayVar[1] = 0;
    //arrayVar[1] = arrayVar[0] = 0;

    for (int i = 2; i < n; i++)
        arrayVar[i] = 1;

    for (int i = 2; i < n; i++)
        if (arrayVar[i] == 1)
            for (int j = i+i; j < n; j=j+i)
                if(j%i==0)
                    arrayVar[j] = 0;

    for (int i = 2; i < n; i++)
        if(arrayVar[i] == 1)
            cout << i << " ";

    return 0;
}


//#include <iostream>
//
//using namespace std;
//
//int main()
//{
//    const int n = 1000;
//    int arrayVar[n];
//    arrayVar[0] = 0;
//    arrayVar[1] = 0;
//    //arrayVar[1] = arrayVar[0] = 0;
//
//    for (int i = 2; i <= n; i++)
//        arrayVar[i] = 1;
//
//    for (int i = 2; i * i <= n; i++)
//        if (arrayVar[i] == 1)
//            for (int j = i * i; j <= n; j = j + i)
//                arrayVar[j] = 0;
//
//    for (int i = 2; i <= n; i++)
//        if (arrayVar[i] == 1)
//            cout << i << " ";
//
//    return 0;
//}