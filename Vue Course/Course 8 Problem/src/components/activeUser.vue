 <script>
export default {
    props: {
        userName: {
            type: String,
            required: true
        },
        userAge: {
            type: Number,
            required: true
        }
    }
}
</script>

 <template>
    <section>
        <h2>{{ userName }}</h2>
        <h3>{{ userAge }} Years</h3>
    </section>
</template>

 <style scoped>
 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     text-align: center;
     text-decoration: none;
     list-style-type: none;
 }
 
 h2,
 h3 {
     background-color: #777373;
     width: 50%;
     border-radius: 40px;
     margin: 40px auto;
     color: #ffffff;
     padding: 40px;
 }
 
 section {
     width: 50%;
     margin: 50px auto;
     background-color: #ffffff;
     box-shadow: 0px 0px 50px -20px rgba(0, 0, 0, 0.75);
     border-radius: 40px;
     padding: 50px 60px;
 }
 </style>