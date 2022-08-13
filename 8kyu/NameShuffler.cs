// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

using System;

public class Kata
{
  public static string NameShuffler(string str)
  {
    return $"{str.Split()[1]} {str.Split()[0]}";
  }
}