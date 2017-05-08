# BookStore
* SSH Framework Demo
# Steps
* File->Import->Git->Projects from Git->Next->Clone URI->[https://github.com/SeniYuting/BookStore](https://github.com/SeniYuting/BookStore)->User/Password
* Right Click->Properties->Project Facets->Convert to faceted form
1. 左边Project Facet->选择Dynamic Web Module, Java, JavaScript
2. 右边Runtimes->选择Apache Tomcat v8.0
3. Apply->OK
* Right Click->Configure->Convert to Maven Project
* 若出现timeout问题，双击Tomcat v8.0 Servers->将启动时间限制放大，右边，选择timeouts->Start设置为1000
* Right Click->Run as->Maven install->BUILD SUCCESS
* Right Click->Run as->Run on Server
* 访问[http://localhost:8080/BookStore/allBooksPro](http://localhost:8080/BookStore/allBooksPro)
