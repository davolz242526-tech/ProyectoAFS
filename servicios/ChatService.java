package com.example.Integrador.servicios;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.*;

@Service

public class ChatService {

    @Value("${groq.api.key}")
    private String apiKey;

    @Value("${groq.api.url}")
    private String apiUrl;

    public String responder(String mensaje) {

        try {
            String prompt = """
                                trabajas para la empresaa: Animal Feed Solutions


                    """ + mensaje;

            RestTemplate restTemplate = new RestTemplate();

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.setBearerAuth(apiKey);

            Map<String, Object> body = new HashMap<>();
            body.put("model", "llama-3.1-8b-instant");
            body.put("messages", List.of(
                    Map.of("role", "user", "content", prompt)));
            body.put("temperature", 0.7);
            body.put("max_tokens", 300);

            HttpEntity<Map<String, Object>> request = new HttpEntity<>(body, headers);

            // PETICION A LA IA

            ResponseEntity<Map> response = restTemplate.postForEntity(apiUrl, request, Map.class);

            // EXTRAER RESPUESTA DE LA IA
            List choices = (List) response.getBody().get("choices");

            Map message = (Map) ((Map) choices.get(0)).get("message");

            return message.get("content").toString();

        } catch (Exception e) {
            e.printStackTrace();
            return "Error al conectar con Groq";
        }
    }
}