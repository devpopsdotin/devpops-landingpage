import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      res.json({ 
        success: true, 
        message: "Thank you for your message! I'll get back to you within 24 hours.",
        id: submission.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Please fill out all required fields correctly.",
          errors: error.errors 
        });
      } else {
        console.error("Contact form submission error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Sorry, there was an error sending your message. Please try again." 
        });
      }
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ 
        success: false, 
        message: "Error fetching contact submissions" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
