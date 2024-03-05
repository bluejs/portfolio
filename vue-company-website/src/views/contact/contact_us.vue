<template>
    <div class="animated fadeIn">

        <div class="services-area">
            <div class="container">
                <!-- Section-tittle -->
                <div class="row d-flex justify-content-center">
                    <div class="col-lg-8">
                        <div class="section-tittle text-center mb-80">
                            <h2 class="heading">联系<span class="text-success">我们</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <contact-form></contact-form>
    </div>
</template>
<script>
import ContactForm from "./components/ContactForm";
import Mailbox from "./components/mailbox";

export default {
    name: "contact-us",
    components: {
        ContactForm,
        Mailbox
    }
};
</script>
<style></style>
