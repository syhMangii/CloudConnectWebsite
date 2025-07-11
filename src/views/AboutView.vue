<template>
  <div class="about-view">
    <Navbar />
    <!-- Hero Section -->
    <section class="relative h-64 bg-cover bg-center" style="background-image: url('/src/images/landingPage/hero1.png');">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative z-10 flex items-center justify-center h-full">
        <h1 class="text-white text-4xl font-bold">About Us</h1>
      </div>
    </section>

    <!-- Content Section -->
    <section class="container mx-auto px-4 py-12">
      <div class="flex flex-wrap -mx-4">
        <!-- Who We Are -->
        <div class="w-full md:w-1/2 px-4 mb-8">
          <h2 class="text-2xl font-semibold mb-4">Who We Are</h2>
         <h1>About Cloud Connect</h1>
  <ul>
    <li><strong>Cloud-Native Approach:</strong> We build and design our applications specifically for cloud environments. This means that our products are developed with cloud-native principles in mind, such as microservices architecture, containerization, and serverless computing. These approaches enable rapid development and scalability.</li>

    <li><strong>Microservices Architecture:</strong> We adopt a microservices architecture, where applications are divided into smaller, independently deployable services. This promotes flexibility and allows for easy updates and maintenance.</li>

    <li><strong>Containerization:</strong> Containers, such as Docker and iSulad, are a fundamental technology in cloud-native development. They provide a consistent and portable environment for applications, making it easier to deploy and manage them across different cloud platforms.</li>

    <li><strong>DevOps and Continuous Integration/Continuous Deployment (CI/CD):</strong> We prioritize DevOps practices and CI/CD pipelines to automate the development, testing, and deployment of our applications. This speeds up the release cycle and ensures reliability.</li>

    <li><strong>Autonomic Computing:</strong> We have embraced autonomic computing principles and integrated them into our products and services. These principles include self-configuration, self-healing, self-protecting, and self-optimising.</li>

    <li><strong>Cloud Providers:</strong> We rely on major cloud providers like Huawei Cloud, TM-CAE Cloud, AWS, Azure, Google Cloud, and Digital Ocean to host our applications. We take advantage of cloud services like AWS Lambda, Azure Functions, and Google Kubernetes Engine (GKE) to simplify operations.</li>

    <li><strong>Monitoring, Telemetry and Observability:</strong> We leverage monitoring, telemetry, and observability tools to gain insights into our products’ performance and troubleshoot issues proactively.</li>

    <li><strong>Conclusion:</strong> We align our product development and infrastructure practices with cloud-native principles. This approach empowers us to stay competitive in the digital age by enabling rapid innovation, scalability, and efficiency in our operations.</li>
  </ul>
        </div>

        <!-- Our Partners -->
        <div class="w-full md:w-1/2 px-4 mb-8">
          <h2 class="text-2xl font-semibold mb-4">Our Partners</h2>
          <div class="flex flex-wrap justify-center items-center mb-8">
            <!-- Dummy Logos - Replace with actual images -->
            <img src="/src/images/landingPage/tm.png" alt="R&D Partner Logo 1" class="h-20 w-auto mx-4 my-2">
            <img src="/src/images/landingPage/enovade.png" alt="R&D Partner Logo 2" class="h-20 w-auto mx-4 my-2">
            <img src="/src/images/landingPage/huawei.png" alt="R&D Partner Logo 3" class="h-20 w-auto mx-4 my-2">
          </div>

          <!-- R&D Partners -->
          <h2 class="text-xl font-semibold mb-4">R&D Partners</h2>
          <div class="flex flex-wrap justify-center items-center mb-8">
            <!-- Dummy Logos - Replace with actual images -->
            <img src="/src/images/landingPage/UM.png" alt="R&D Partner Logo 1" class="h-20 w-auto mx-4 my-2">
          </div>

          <!-- Collaboration Partners -->
          <h2 class="text-xl font-semibold mb-4">Collaboration Partners</h2>
          <div class="flex flex-wrap justify-center items-center">
            <!-- Dummy Logos - Replace with actual images -->
            <img src="/src/images/landingPage/UITM.png" alt="Collaboration Partner Logo 1" class="h-20 w-auto mx-4 my-2">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Navbar from '../components/layout/Navbar.vue'
// No specific script logic needed for this static content view
</script>

<style scoped>
/* Add any specific styles if needed, though Tailwind should handle most */
</style>
