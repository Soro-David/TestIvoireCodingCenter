<template>
<div class="container-fluid p-0 mb-5">
        <div class="owl-carousel header-carousel position-relative">
            <div class="owl-carousel-item position-relative">
                <img src="https://picsum.photos/1500/600/?image=58" alt="Accueil">                <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style="background: rgba(24, 29, 56, .7);">
                    <div class="container">
                        <div class="row justify-content-start">
                            <div class="col-sm-10 col-lg-8">
                                <h5 class="text-primary text-uppercase mb-3 animated slideInDown">BaskVente</h5>
                                <h1 class="display-3 text-white animated slideInDown">Meileur shuse de qualité pour toue</h1>
                                <a href="" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Lire Plus</a>
                                <a href="" class="btn btn-light py-md-3 px-md-5 animated slideInRight">Réjoignez-Nous</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
    <router-view/>

</template>

<script>


</script>

<style scoped>

.testimonial-carousel .owl-item .testimonial-text,
.testimonial-carousel .owl-item.center .testimonial-text * {
    transition: .5s;
}

.testimonial-carousel .owl-item.center .testimonial-text {
    background: var(--primary) !important;
}

.testimonial-carousel .owl-item.center .testimonial-text * {
    color: #FFFFFF !important;
}

.testimonial-carousel .owl-dots {
    margin-top: 24px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}

.testimonial-carousel .owl-dot {
    position: relative;
    display: inline-block;
    margin: 0 5px;
    width: 15px;
    height: 15px;
    border: 1px solid #CCCCCC;
    transition: .5s;
}

.testimonial-carousel .owl-dot.active {
    background: var(--primary);
    border-color: var(--primary);
}
</style>