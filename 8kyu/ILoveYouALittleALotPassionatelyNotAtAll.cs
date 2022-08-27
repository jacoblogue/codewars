using System;

public class Kata
{
  public static string HowMuchILoveYou(int nb_petals)
  {
    string[] phrases = { "I love you", "a little", "a lot", "passionately", "madly", "not at all" };
    return (nb_petals > phrases.Length) ? phrases[phrases.Length % (nb_petals - 1)] : phrases[nb_petals - 1];
  }
}