using System;

namespace sieve
{
    class Program
    {
        const int HiPrime=100;
        static readonly bool[] Primes = new bool[HiPrime];//by default they're all false

        private static void Main(string[] args)
        {

            for (var i = 2; i < HiPrime; i++)
            {
                Primes[i] = true;//set all potential primes true
            }

            for (var j = 2; j < HiPrime; j++)
            {
                if (!Primes[j]) continue;
                for (long p = 2; (p * j) < HiPrime; p++)
                {
                    Primes[p * j] = false;
                }
            }

            for (var index = 2; index < Primes.Length; index++)
            {
                if (Primes[index]) Console.WriteLine(index);
            }

        }
    }
}
