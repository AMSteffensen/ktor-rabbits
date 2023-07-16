package com.amsteffensen

import com.ktor.rabbits.routes.randomRabbit
import io.ktor.routing.*
import io.ktor.http.*
import io.ktor.serialization.*
import io.ktor.features.*
import org.slf4j.event.*
import io.ktor.content.*
import io.ktor.http.content.*
import io.ktor.application.*
import io.ktor.response.*
import io.ktor.request.*
import kotlin.test.*
import io.ktor.server.testing.*
import com.ktor.rabbits.plugins.*

class ApplicationTest {
   /* @Test
    fun testRoot() {
        withTestApplication({ configureRouting() }) {
            handleRequest(HttpMethod.Get, "/").apply {
                assertEquals(HttpStatusCode.OK, response.status())
                //assertEquals("Hello World!", response.content)
            }
        }
    }
    @Test
    fun testRandomRabbit() {
        withTestApplication({ configureRouting() }) {
            handleRequest(HttpMethod.Get, "http://0.0.0.0:8080/randomrabbit").apply {
                assertEquals(HttpStatusCode.OK, response.status())

                val responseContent = response.content
                assertNotNull(responseContent)

                // Assuming the response content is in JSON format
                val rabbit = Json.decodeFromString<Rabbit>(responseContent)

                assertNotNull(rabbit.name)
                assertNotNull(rabbit.description)
                assertNotNull(rabbit.imageUrl)
            }
        }
    }*/
}