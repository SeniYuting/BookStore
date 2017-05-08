# BookStore
* SSH Framework Demo
# Steps
* File->Import->Git->Projects from Git->Next->Clone URI->https://github.com/SeniYuting/BookStore->User/Password
* Right Click->Properties->Project Facets
1. ->左边Project Facet->选择Dynamic Web Module, Java, JavaScript
2. ->右边Runtimes->选择Apache Tomcat v8.0
* Right Click->Configure->Convert to Maven Project
* 若出现timeout问题，双击Tomcat v8.0 Servers->将启动时间限制放大，选择timeout->设置为1000
* Right Click->Run as->Maven install
* Right Click->Run as->Run on Server
