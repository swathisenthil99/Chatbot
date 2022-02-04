function getBotResponse(input) {

    if (input == "courses" || input == "1.Courses" || input == "1.courses"){
        return "Courses in Computer Applications are MCA, M.SC.Data Analytics, M.SC.Cyber Security, Diploma in Cyber Security and Digital Forensics, which one you want to know?";
    }
    else if (input == "admission" || input == "2.Admission" || input == "2.admission" || input == "admission process") {
        return "Admission process are going on both online and offline. The Admission will be based on the marks scored by the candidate in all the semesters as decided by Competent Authority. For more details go to <a href='https://b-u.ac.in/pg-admission'>https://b-u.ac.in/pg-admission</a>";
    }
    else if (input == "fee" || input == "fees" || input == "sem fee" || input == "semester fee" || input == "semester fees" || input == "fees structure"){
        return "To know about fees structure of all courses in Department of Computer Application go to <a href='https://b-u.ac.in/23/department-computer-applications-fees-structure'> fees structure. </a>";
    }
    else if (input == "MCA" || input == "mca"){
        return "The M.C.A. programme is offered on a full-time basis for two years with an intake of 80. The programme will consist of three semesters of course work and laboratory work and the final semester consists of a major project. The course helps in meeting the rising demand for qualified and skilled professionals in the field of Information Technology. The programme aims at collectively providing insights on the various computing languages, database concepts with hands-on training. The students are made industry-ready at the end of the course.";
    }

    else if (input == "M.SC.Data Analytics" || input == "m.sc.data analytics" || input == "data analytics"){
        return "The M.Sc. Data Analytics programme is offered on a full-time basis for two years with an intake of 40. The programme consists of three semesters of course work and laboratory work and the final semester consists of a major project. The programme aims at collectively providing insights on the various data analysis tools with hands-on training. The students are made industry-ready at the end of the course.";
    }
    else if (input == "M.SC.Cyber Security" || input == "m.sc.cyber security" || input == "cyber security"){
        return "The M.Sc. Cyber Security programme is offered on a full-time basis for two years with an intake of 40. The programme will consist of three semesters of course work and laboratory work and the final semester consists of a major project.  The curriculum focuses on increasing awareness and concern over the growing cyber threats facing organizations, governments, and individuals.";
    }
    else if (input == "Diploma in Cyber Security and Digital Forensics") {
      return "The candidates can undergo this course both in full-time (3 months) and part-time (6 months).  The certificate programme consists of theory and practical courses. The General Regulations of the Bharathiar University Choice Based Credit System are applicable to this certificate programme. It provides a base for ethical hacking to the participants.";
    }
    else if (input == "syllabus" || input == "Syllabus") {
        return "MCA - "+"<a href='http://syllabus.b-u.ac.in/unidepts/2022/mca_final.pdf'>download pdf</a>"+"<br> M.SC.Data Analytics - "+"<a href='http://syllabus.b-u.ac.in/unidepts/2022/msc_data_analytics_2021_22_10012022.pdf'>download pdf</a>"+"<br> M.SC.Cyber Security - "+"<a href='http://syllabus.b-u.ac.in/unidepts/2022/msc_cyber_security.pdf'>download pdf</a>";
    }
    else if (input == "Mca Syllabus" || input == "mca syllabus" || input == "MCA syllabus"){
        return "MCA - "+"<a href='http://syllabus.b-u.ac.in/unidepts/2022/mca_final.pdf'>download pdf</a>";
    }
    else if (input == "M.SC.Data Analytics syllabus" || input == "m.sc.data analytics syllabus" || input == "Data Analytics syllabus" || input == "data analytics syllabus"){
        return "M.SC.Data Analytics - "+"<a href='http://syllabus.b-u.ac.in/unidepts/2022/msc_data_analytics_2021_22_10012022.pdf'>download pdf</a>";
    }
    else if (input == "M.SC.Cyber Security syllabus" || input == "m.sc.cyber security syllabus" || input == "Cyber Security syllabus" || input == "cyber security syllabus"){
        return "M.SC.Cyber Security - "+"<a href='http://syllabus.b-u.ac.in/unidepts/2022/msc_cyber_security.pdf'>download pdf</a>";
    }
    else if (input == "good morning" || input == "morning") {
        return "Good Morning ! Have a good day !";
    }
    else if (input == "good bye" || input == "bye") {
        return "Talk to you later!";
    }
    else if (input == "MCA Duration" || input == "mca duration"){
        return "2 years";
    }
    else if (input == "M.SC.Data Analytics Duration" || input == "m.sc.data analytics duration" || input == "msc data analytics duration" || input == "data analytics duration"){
        return "2 years";
    }
    else if (input == "M.SC.Cyber Security Duration" || input == "m.sc.cyber security duration" || input == "Cyber Security duration" || input == "cyber security duration"){
        return "2 years";
    }
    else if (input == "MCA Strength" || input == "mca strength" || input == "mca seats" || input == "MCA seats"){
        return "80";
    }
    else if (input == "M.SC.Data Analytics Strength" || input == "m.sc.data analytics strength" || input == "msc data analytics strength" || input == "data analytics strength" || input == "data analytics seats"){
        return "40";
    }
    else if (input == "M.SC.Cyber Security Strength" || input == "m.sc.cyber security strength" || input == "Cyber Security strength" || input == "cyber security strength" || input == "cyber security seats"){
        return "40";
    }
    else if (input == "MCA Eligibility" || input == "mca eligibility" || input == "eligibility for mca"){
        return "A Pass in Bachelors degree of minimum 3 years duration BCA,B.Sc.(Computer Science / Computer Technology / Information Technology / Computer System and Design) or equivalent with Mathematics as a course at Higher Secondary level or at Graduate level. The candidate should have appeared for TANCET 2021/Bharathiar University MCA Entrance Test.";
    }
    else if (input == "M.SC.Data Analytics Eligibility" || input == "m.sc.data analytics eligibility" || input == "msc data analytics eligibility" || input == "data analytics eligibility" || input == "eligibility for data analytics"){
        return "A Pass in any Bachelors degree of minimum 3 years duration with Mathematics or Statistics as any one of the subjects at Graduate level.";
    }
    else if (input == "M.SC.Cyber Security Eligibility" || input == "m.sc.cyber security eligibility" || input == "Cyber Security eligibility" || input == "cyber security eligibility" || input == "eligibility cyber security"){
        return "A Pass in any Bachelor's degree of minimum 3 years duration with Mathematics or Statistics as any one of the subjects at Graduate Level.";
    }
    else if (input == "durations" || input == "duration" || input == "course durations" || input == "course duration") {
        return "MCA - 2 years <br> M.SC.Data Analytics - 2 years <br> M.SC.Cyber Security - 2 years";
    }
    else if (input == "strength" || input == "Strength" || input == "seats" || input == "Seats") {
        return "MCA - 80 <br> M.SC.Data Analytics - 40 <br> M.SC.Cyber Security - 40";
    }
    else if (input == "Eligibility" || input == "eligibility"){
        return "MCA - "+"<br> A Pass in Bachelors degree of minimum 3 years duration BCA,B.Sc.(Computer Science / Computer Technology / Information Technology / Computer System and Design) or equivalent with Mathematics as a course at Higher Secondary level or at Graduate level. The candidate should have appeared for TANCET 2021/Bharathiar University MCA Entrance Test." + "<br> <br> M.SC.Data Analytics and Cyber Security - " + " <br>A Pass in any Bachelor's degree of minimum 3 years duration with Mathematics or Statistics as any one of the subjects at Graduate Level.";
    }
    else if (input == "Faculty" || input == "faculty members" || input == "faculties" || input == "faculty for computer applications" || input == "faculty") {
        return "To know about faculties of computer applications <a href ='https://old.b-u.ac.in/Home/DeptCaFaculty'>click here</a>";
    }
    else if (input == "online exam portal" || input == "online exam" || input == "exam" || input == "exam portal" || input == "online exams") {
        return "To go online exam portal <a href ='https://buonlineexam2022.b-u.ac.in/Identity/Account/Login?ReturnUrl=%2F'>click here</a>";
    }
    else if (input == "online payment" || input == "Online Payment" || input == "exam" || input == "payment") {
        return "semester Fees - <a href ='http://fms.b-u.ac.in:8000/semfees-login/'>click here</a>" + "<br> Exam & Exam Section Related Fees - <a href ='http://fms.b-u.ac.in:8000/exam-fees/'>click here</a>"+ "<br> Various Fees & General Remittance - <a href ='http://fms.b-u.ac.in:8000/various-fees/'>click here</a>";
    }
    else if (input == "placements"){
        return "The University has an excellent placement record. An exclusive placement wing in the School of Management caters to the requirements of the students and gets them offers with attractive compensation packages.";
    }
    else if (input == "companies"){
      return "Companies registered with University are: <br> ANZ Grindlays, Infosys Technologies Ltd, American Presidency Lines, ITC, Bharat Planet.com, Mahindra Holiday, BPL Telecom, NIIT, Cannon India Ltd, Oracle Corporation, Citicorp, Reliance Infocom, Centurion Bank, Spencers, Coffee Day, Servion Global, Deltagram, Jet Airways, FCB ULKA, U.S. Vitamins, Gillette, Sharp, GE Capital, Akai, Goodlass Nerolac Ltd, Office tiger.com, Hidesign, Vetri Software, Hyundai Motors Ltd, CG - Vak, ICICI Lombard, Tata Housing, India Construction.com, Indiamarkets.com, Food World";
    }
    else if (input == "registration fee" || input == "application fee" || input == "registration amount" || input == "application fees"){
      return "The candidates have to pay the Registration Fee of Rs.400/- through net banking / Debit / Credit Cards/DD/NEFT. SC/ST candidates have to pay only Rs.200/- provided they have to produce a photo copy of his/her community certificate.";
    }
    else if (input == "online applications" || input == "online application" || input == "application form" || input == " form for application" || input == "application" || input == "registration process"){
      return "The application may be filled online at <a href='https://admissions.b-u.ac.in'> https://admissions.b-u.ac.in </a> the guidelines for filling up the online application is available at <a href='https://cdn.b-u.ac.in/admission/2021/application_guidelines.pdf'> click here </a>";
    }
    else if (input == "marks"){
      return "<img src='static/images/mca_marks.jpeg'>";
    }
    else {
        return "Try asking something else!";
    }
}
