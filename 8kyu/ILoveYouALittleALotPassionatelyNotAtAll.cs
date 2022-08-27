using System;

public class Kata
{
  public static string HowMuchILoveYou(int nb_petals)
  {
    string[] phrases = { "I love you", "a little", "a lot", "passionately", "madly", "not at all" };
    return (nb_petals > phrases.Length) ? phrases[(nb_petals - 1) % phrases.Length] : phrases[nb_petals - 1];
  }
}