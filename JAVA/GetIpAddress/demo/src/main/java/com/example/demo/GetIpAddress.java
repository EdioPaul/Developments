package com.example.demo;

import java.net.*;

public class GetIpAddress {
  public static void main(String[] args) {
    String[] host = { "youtube.com", "google.com" };
    try {
      InetAddress localhost = InetAddress.getLocalHost();
      System.out.println("Local Host :" + localhost);
      System.out.println("****************************************");
      
      for (int i = 0; i < host.length; i++) {
        InetAddress[] iAddresses = InetAddress.getAllByName(host[i]);
        for (InetAddress ipAddress : iAddresses) {
          System.out.println(ipAddress.toString());
        }
        System.out.println("****************************************");
      }
    } catch (Exception e) {
      System.out.println(e);
    }
  }
}
